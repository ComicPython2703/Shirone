/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "JavaScript",
		description:
			"ES2020+ syntax, async plumbing, and event-driven browser code.",
		icon: "simple-icons:javascript",
		category: "frontend",
		level: "beginner",
	},
	{
		name: "Tailwind CSS",
		description: "Utility-first styling for rapidly composed interfaces.",
		icon: "simple-icons:tailwindcss",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Node.js",
		description: "Build tooling, services, and content pipelines.",
		icon: "simple-icons:nodedotjs",
		category: "backend",
		level: "advanced",
	},
	{
		name: "Python",
		description: "Scripting, data wrangling, and service automation.",
		icon: "simple-icons:python",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Java",
		description: "Typed OO code for larger service and tooling layers.",
		icon: "simple-icons:openjdk",
		category: "backend",
		level: "beginner",
	},
	{
		name: "C++",
		description: "Native modules and performance-sensitive components.",
		icon: "simple-icons:cplusplus",
		category: "backend",
		level: "advanced",
	},
	{
		name: "C",
		description: "Low-level systems work close to the runtime.",
		icon: "simple-icons:c",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Kotlin",
		description: "Concise JVM/Android code with modern null safety.",
		icon: "simple-icons:kotlin",
		category: "backend",
		level: "beginner",
	},
];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
