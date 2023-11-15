import { FaceIcon } from "@radix-ui/react-icons"

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
          href: "/11"
        },
        {
          title: "2번 내용",
          href: "/12"
        },
        {
          title: "3번 내용",
          href: "/13"
        }
      ]
    },
    {
      title: "2번줄",
      content: [
        {
          title: "1번 내용",
          href: "/21"
        },
        {
          title: "2번 내용",
          href: "/22"
        },
        {
          title: "3번 내용",
          href: "/23"
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "1번 내용",
          href: "/31"
        },
        {
          title: "2번 내용",
          href: "/32"
        },
        {
          title: "3번 내용",
          href: "/33"
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
  dashboardSidebarContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "11번 내용",
          href: "/11"
        },
        {
          title: "12번 내용",
          href: "/12"
        },
        {
          title: "13번 내용",
          href: "/13"
        }
      ]
    },
    {
      title: "2번줄",
      content: [
        {
          title: "21번 내용",
          href: "/21"
        },
        {
          title: "22번 내용",
          href: "/22"
        },
        {
          title: "23번 내용",
          href: "/23"
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "31번 내용",
          href: "/31"
        },
        {
          title: "32번 내용",
          href: "/32"
        },
        {
          title: "33번 내용",
          href: "/33"
        }
      ]
    },
    {
      title: "4번줄",
      href: "/4"
    }
  ],
}
