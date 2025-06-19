export default function returnHowManyArguments(...arg) {
    console.log(arg.length)
}
returnHowManyArguments("one");
returnHowManyArguments("one", "two", 3, "4th");