export async function handler(event) {
    console.info("Event:")
    console.log(JSON.stringify(event));
    return null;
}