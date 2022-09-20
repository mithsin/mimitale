export const showTitle = {
    'shopItemList': "Shop Item",
    'questItemList': "Quest Item",
    'dailyQuestItemList': "Daily Quest Item",
    'historyList': "History",
    'tradePending': "Pending trade",
    'completePending': "Pending Complete",
    'requestItem': "Request Item",
    'points': "Points",
}

export const showDisplayType = (userTypeGiver) => ({
    'shopItemList': "tile",
    'questItemList': "tile",
    'dailyQuestItemList': "tile",
    'historyList': "row",
    'tradePending': "row",
    'completePending': "row",
    'requestItem': "row",
    ...(userTypeGiver && {'points': "pointLayout"})
})

export const showTypeText = {
    'shopItemList': "Buy", 
    'questItemList': "Done", 
    'dailyQuestItemList': "Done", 
}