const mdx = (...args: any[]) => args

const MdxComponent = mdx`
# Hello Inline Mdx

> Feel the power of js-in-md-in-js

## Checklist
- [x] Mdx
- [x] Macro
- [x] Code Highlighting

Yay!
`

export const Component = () => (
  <section>
    <h1>Hardcoded title, we don't want that :/</h1>
    <div>
      <MdxComponent />
    </div>
  </section>
)
