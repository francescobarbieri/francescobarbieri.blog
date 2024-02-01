import { getPostList, getAllPostsList } from "@/lib/contentful";
import WritingLink from "./writing-link";
import { TypographyH4 } from "./ui/typography/Typography";

const WritingLinkList = async ({ slugList }) => {

    if(slugList) {
        const data = await getPostList(slugList);

        const posts = data.map( item => ({
            title: item.fields.title,
            slug: item.fields.slug,
            date: new Date(item.sys.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
            year: new Date(item.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric' })
        }));

        return (
            <div className="flex flex-col gap-3">
                {posts.map( item => (
                        <WritingLink
                            key={item.slug}
                            slug={item.slug}
                            date={item.date}
                            title={item.title}
                        />
                ))}
            </div>
        )
    }

    const data = await getAllPostsList();

    const posts = data.map( item => ({
        title: item.fields.title,
        slug: item.fields.slug,
        date: new Date(item.sys.createdAt).toLocaleDateString(
                'en-US', { month: 'long', day: 'numeric' }
            ),
        year: new Date(item.sys.createdAt).toLocaleDateString(
                'en-US', { year: 'numeric' }
            )
    })).reduce( (acc, post) => {
        if(!acc[post.year]) {
            acc[post.year] = [];
        }
        acc[post.year].push(post);
        return acc;
    }, {});

    return (
        <>
            {Object.entries(posts).map(([year, items]) => (
                <div key={year}>
                    <br/> <hr/> <br/>
                    <TypographyH4>{year}</TypographyH4><br/>
                    <div className="flex flex-col gap-3">
                        {items.map(item => (
                            <WritingLink
                                key={item.slug}
                                title={item.title}
                                slug={item.slug}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
 
export default WritingLinkList;