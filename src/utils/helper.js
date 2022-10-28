export const calMatchedWord = (guessedWord, secreteWord) => {

    const guessedWordSeparate = new Set(guessedWord);
    const secreteWordSeparate = new Set(secreteWord);
    const matchedCount = [...secreteWordSeparate].filter(word => guessedWordSeparate.has(word))
    return matchedCount.length
}