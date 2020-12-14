

/**
 * simulate a fetch request
 * @param ms 
 */
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 *  This one should  be a backend api function that gets the main banner content
 */
export interface dataType {
  text: string,
  href?: string
}

export type argType = string

export async function getDumbData(arg: argType) {
  // TODO: The backend logic
  await sleep(1200)
  console.log("Main content fetched!")

  return [
    {
      href: "/",
      text: "Some data about something"+arg,
    },
    {
      href: "/",
      text: "Some data about other things"+arg,
    },
    {
      href: "/",
      text: "more data"+arg,
    },
  ] as dataType[]
}

// export type argType = string

// export function setDumbData(arg: argType) {
//   // TODO: The backend logic
//   // await sleep(1200)
//   console.log("Main content fetched!")

//   return [
//     {
//       href: "/",
//       text: "Some data about something"+arg,
//     },
//     {
//       href: "/",
//       text: "Some data about other things"+arg,
//     },
//     {
//       href: "/",
//       text: "more data"+arg,
//     },
//   ] as dataType[]
// }


