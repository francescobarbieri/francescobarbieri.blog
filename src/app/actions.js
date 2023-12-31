'use server'

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "src", "posts");

export async function fetchPosts() {

    const fileNames = fs.readdirSync(postDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            fileName,
            content,
            ...data,
        };
    });

    return posts;
}

export async function getSinglePost(fileLink) {

    const fileNames = fs.readdirSync(postDirectory);

    let singlePost;

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        if(data.link == fileLink) {
            singlePost =  {
                fileName,
                content,
                ...data,
            };
        }
    });

    return singlePost;
}

export async function fetchInitialPosts(filter) {

    if(filter == undefined) {
        filter = true;
    }

    const fileNames = fs.readdirSync(postDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            fileName,
            content,
            ...data,
        };
    });

    return posts.reverse().filter(
        (item) => {
            if(filter == true) {
                return true;
            } else if (item.tag === filter) {
                return true;
            } else {
                return false;
            }
        }
    ).slice(0, 3);
}

export async function getNextPost(currentPostID, filter) {

    // Fetch all posts
    const allPosts = await fetchPosts();

    // If there are no more post remaining return
    if(allPosts[currentPostID-1] === undefined) return;

    if (filter === undefined) {
        return allPosts[currentPostID-1]
    } else {

        let temp = 1;
        
        while(allPosts[currentPostID-temp].tag !== filter) {
            temp++;
            if(currentPostID-temp < 0) return;
        }

        return allPosts[currentPostID - temp]
    }
}

export async function addSubscriber(formData) {

    const mailchimp = require('@mailchimp/mailchimp_marketing');
    const crypto = require('crypto');
    const email = await formData.get("email");

    mailchimp.setConfig({
        apiKey: "7376fa7725107a6ec3f42b1048a8028f-us21",
        server: "us21",
    });

    const addUserResponse = async() => {
        const response = await mailchimp.lists.setListMember(
            "f2a56fb6ab",
            crypto.createHash("md5").update(email).digest("hex"),
            { email_address: email, status_if_new: "subscribed", status: "subscribed"}
        );

        console.log(response)
    }
    
    addUserResponse();
}