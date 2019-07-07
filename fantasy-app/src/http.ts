export const $fetch = async (url:string):Promise<any>=> {
       const response = await fetch(url);
       //console.log(await response.json())
       return Promise.resolve(response.json()) || Promise.reject('error')
}