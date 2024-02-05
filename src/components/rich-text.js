'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { TypographyBlockquote, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyHyperlink, TypographyP } from './ui/typography/Typography';

const options =  {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <TypographyH1>{ children }</TypographyH1>,
        [BLOCKS.HEADING_2]: (node, children) => <TypographyH2>{ children }</TypographyH2>,
        [BLOCKS.HEADING_3]: (node, children) => <TypographyH3>{ children }</TypographyH3>,
        [BLOCKS.HEADING_4]: (node, children) => <TypographyH4>{ children }</TypographyH4>,
        [BLOCKS.PARAGRAPH]: (node, children) => <TypographyP>{ children }</TypographyP>,
        [BLOCKS.UL_LIST]: (node, children) => <div className='my-6 ml-6 list-disc [&>li]:mt-2'> { children } </div>,
        [BLOCKS.QUOTE]: (node, children) => <TypographyBlockquote> { children } </TypographyBlockquote>,
        [INLINES.HYPERLINK]: (node, children) => <TypographyHyperlink href={node.data.uri}>{ children }</TypographyHyperlink>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <img
                className='my-8 rounded-lg w-full'
                src={node.data.target.fields.file.url}
            />
        )
    }
}


export const RichText = ({ content }) => {
    return(documentToReactComponents(content, options))
}