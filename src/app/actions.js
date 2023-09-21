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
        const { data } = matter(fileContents);

        return {
            fileName,
            fileContents,
            ...data,
        };
    });

    return posts;
}

export async function fetchInitialPosts(filter) {

    if(filter == undefined) {
        filter = true;
    }

    const fileNames = fs.readdirSync(postDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            fileName,
            fileContents,
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
        }

        return allPosts[currentPostID - temp]
    }
}