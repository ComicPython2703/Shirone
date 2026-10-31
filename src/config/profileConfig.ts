import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/toux.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "ComicPython6045",
	bio: "雨记得天空忘记说的话",
	links: [
		{
			name: "X",
			icon: "fa7-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/Louxiaawa",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ComicPython2703/",
		},
		{
			name: "BiliBili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/514391322",
		},
		{
			name: "Facebook",
			icon: "fa7-brands:facebook-square",
			url: "https://facebook.com/profile.php?id=61590942825253",
		},
		{
			name: "instagram",
			icon: "fa7-brands:instagram",
			url: "https://instagram.com/louawalou",
		},
		{
			name: "YouTube",
			icon: "fa7-brands:youtube",
			url: "https://www.youtube.com/@Louxiaawa",
		},
	],
});
