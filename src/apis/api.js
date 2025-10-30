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