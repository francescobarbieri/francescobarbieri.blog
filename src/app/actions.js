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
            ...data,
        };
    });

    // posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // console.log(posts.reverse())
    return posts.reverse();
}

export async function fetchInitialPosts() {

    const fileNames = fs.readdirSync(postDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            fileName,
            ...data,
        };
    });

    // posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // console.log(posts.reverse().slice(0, 3))

    return posts.reverse().slice(0, 3);
}

export async function getNextPost(currentPostNumber) {
    const allPosts = [];
    await fetchPosts().then(res => {
        res.map((i, index) =>
            allPosts.push(i)
        )
    });

    // console.log(allPosts[currentPostNumber+1]);

    if(allPosts[currentPostNumber+1] === undefined) {
        return;
    }

    return allPosts[currentPostNumber+1]
}