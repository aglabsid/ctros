import { Resvg } from '@resvg/resvg-js'
import siteImage from './templates/site'

const svgToPngBuffer = (svg: string) => {
	const resvg = new Resvg(svg)
	const pngData = resvg.render()
	return pngData.asPng()
}

export const generateSiteOgImage = async (title?: string) => {
	const svg = await siteImage(title)
	return new Uint8Array(svgToPngBuffer(svg))
}
