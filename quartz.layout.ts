import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Site Source": "https://github.com/yarohtar/maths-notes-quartz",
      "Obsidian Source": "https://github.com/yarohtar/cam-maths-notes-obsidian",
    },
  }),
}

let is_index = (page) => page.fileData.slug == "index"
let is_fallback = (page) => page.fileData.slug == "feedback" || page.fileData.slug == "no-page"

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs({resolveFrontmatterTitle: false,}),
      condition: (page) => !is_index(page) && !is_fallback(page),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
        condition: (page) => !is_fallback(page),
    }),
    //Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.PageTitle(),
        condition: (page) => !is_fallback(page),
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.RequestReviewButton()),
        condition: (page) => !is_fallback(page),
    }),
    // Component.Explorer(),
  ],
  right: [
    Component.ConditionalRender({
        component: Component.Flex(
          {
            components: 
            [
              { Component: Component.Graph(), },
              { Component: Component.DesktopOnly(Component.TableOfContents()), },
              { Component: Component.Backlinks(), },
              { Component: Component.MobileOnly(Component.RequestReviewButton()), },
            ],
            direction: "column",
          }
        ),
        condition: (page) => !is_fallback(page),
      }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({resolveFrontmatterTitle: false,}), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    // Component.Explorer(),
  ],
  right: [],
}
