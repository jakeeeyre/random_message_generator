const names = ["jack", "jake", "hwyel", "will", "frame", "lilly", "calum"]
const adjective = ["very", "not very", "woefully", "really"]
const skillLevel = ["bad", "crap", "mega", "good"] 

const sentence = () => {
    const getName = names[Math.floor(Math.random()*names.length)]
    const getAdjective = adjective[Math.floor(Math.random()*adjective.length)]
    const getSkillLevel = skillLevel[Math.floor(Math.random()*skillLevel.length)]
    if (getAdjective === "woefully"){
        skillLevel.splice(2, 2)
        return `${getName} is ${getAdjective} ${getSkillLevel} at golf!`
    } else if(getAdjective === "very"){
        skillLevel.splice(2, 1)
        return `${getName} is ${getAdjective} ${getSkillLevel} at golf!`
    } else if(getAdjective === "not very"){
        skillLevel.splice(1, 1)
        return `${getName} is ${getAdjective} ${getSkillLevel} at golf!`
    } else {
        return `${getName} is ${getAdjective} ${getSkillLevel} at golf!`
    }   
}
  
console.log(sentence())
