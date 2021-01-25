
export function recommend(genre,like) {
    return {
       type: genre,
       payload: like
    }
 }