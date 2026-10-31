/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 420,
		platform: "PC",
		year: "2011",
		tags: ["Sandbox", "Survival", "Building"],
		description:
			"A blocky sandbox where you mine, craft and build across procedurally generated worlds. Survive the night, or just keep building — alone or with friends.",
		link: "https://www.minecraft.net/",
	},
	{
		id: "dealtaforce",                // 唯一标识（禁用列表按它命中）
		name: "三角洲行动(国际服)",              // 游戏名称
		developer: "Level inifine",    // 开发商
		category: "action",            // 分类，引用 config 中的 key
		status: "playing",              // 游玩状态
		icon: "material-symbols:widgets-rounded", // 无封面时的图标
		rating: 5,                      // 评分（0–5，支持 0.5 步进）
		hours: 420,                     // 已游玩时长（小时）
		platform: "Mobile(Android)",                 // 平台
		year: "2025",                   // 发行年份
		tags: ["action"],  // 类型标签（卡片上的 chips）
		description: "方块世界沙盒游戏……", // 简评
		link: "https://www.playdeltaforce.com/", // 商店页/官网链接
		featured: true,                 // Featured 推荐徽章
  },
];
