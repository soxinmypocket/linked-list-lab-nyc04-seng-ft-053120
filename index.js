let collection = {rnadnm: {name: 'ferris', next: 'masjdrandm'},
    masjdrandm: {name: 'sloane', next: 'ntrandm'}, ntrandm: {name: 'cameron', next: null},
  }

function getName(node){
    return node.name
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++){
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, linkedList, collection){
    if (index == 0)     
        return linkedList
    const node = nodeAt(index-1, linkedList, collection)
        return node.next
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIndex = 0;
    while(currentNode != node){
        currentIndex++
        currentNode = next(currentNode, collection)
    }
    return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index-1, linkedList, collection)
    let nextNode = nodeAt(index, linkedList, collection)
    let nextNodeAddress = addressAt(nextNode, linkedList, collection)

    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = nextNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode
    let currentNode = headNode(linkedList, collection)
    for(let i = 0; i< index; i++){
        previousNode = currentNode;
        currentNode = next(currentNode, collection)
    }
    previousNode.next = currentNode.next
}