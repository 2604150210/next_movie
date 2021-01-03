import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation () {
  return (
    <Box h="52px" bg="#202020" color="#fff">
      <HStack space={3} justifyContent="center" alignItems="center" h="52px">
        <Link href="/"><a>影片</a></Link>
        <Link href="/"><a>漫画</a></Link>
        <Link href="/"><a>电影</a></Link>
        <Link href="/"><a>电视</a></Link>
        <Link href="/"><a>新闻</a></Link>
      </HStack>
    </Box>
  )
}