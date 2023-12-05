function find3rdHighestScore(scores) {
    if (scores.length < 3) {
        return "Ko đủ 3 số điểm ";
    }
    let caoNhat = -Infinity;
    let secondHighest = -Infinity;
    let thirdHighest = -Infinity;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > caoNhat) {
            thirdHighest = secondHighest;
            secondHighest = caoNhat;
            caoNhat = scores[i];
        } else if (scores[i] > secondHighest) {
            thirdHighest = secondHighest;
            secondHighest = scores[i];
        } else if (scores[i] > thirdHighest) {
            thirdHighest = scores[i];
        }
    }

    return thirdHighest;
}
let examScores = [100, 93, 88, 92, 89, 95, 79];
let thirdHighestScore = find3rdHighestScore(examScores);
console.log("Điểm cao thứ 3 là:", thirdHighestScore);
