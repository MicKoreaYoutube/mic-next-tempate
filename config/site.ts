export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js Template",
  description:
    "A nextjs template by MicKoreaYoutube based on shadcn-ui",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  footerContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
    {
      title: "2번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
  ],
  FamilySurvice: [
    {
      name: "1번 서비스",
      href: "/1s"
    },
    {
      name: "2번 서비스",
      href: "/2s"
    },
    {
      name: "3번 서비스",
      href: "/3s"
    }
  ],
  links: {
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui",
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    micGithub: "https://github.com/MicKoreaYoutube/mic-next-template"
  },
}
