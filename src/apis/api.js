import httpInstance from "@/utils/http";

export function getAllGoods(){
  return httpInstance({
    url: "goods"
  })
}

export function findUserByUsername(username){
  return httpInstance({
    url: `users/${username}`
  })
}

export function getGoodsLimitAndOffset(limit, offset){
  return httpInstance({
    url: `goods/page?limit=${limit}&offset=${offset}`
  })
}