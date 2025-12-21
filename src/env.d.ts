interface ImportMetaEnv {
	readonly PUBLIC_GISCUS_REPOSITORY_NAME: string
	readonly PUBLIC_GISCUS_REPOSITORY_ID: string
	readonly PUBLIC_GISCUS_CATEGORY_NAME: string
	readonly PUBLIC_GISCUS_CATEGORY_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
