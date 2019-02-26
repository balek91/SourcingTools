import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
})

const spell = [
  { id: 1, content: 'expelliamus' },
  { id: 2, content: 'avada Kedavra' },
  { id: 3, content: 'wingardium leviosa' },
  { id: 4, content: 'patronum' }
]

export default class DragAndDrop extends Component {
  state = {
    items: spell
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items
    })
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              // In order for the droppable to function correctly, you must bind the provided.innerRef to the highest possible DOM node in the ReactElement
              ref={provided.innerRef}
              // get The Style depending on the dragging state
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {/* map on the state to display the draggable element */}
              {this.state.items.map((item, index) => (
                // draggableId is mandatory to allow dnd to order properly the draggable items
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      // provided.draggableProps is is an Object that contains properties that need to be applied to a Droppable element
                      {...provided.draggableProps}
                      // every Draggable has a drag handle. This is what is used to drag the whole Draggable
                      //DragHandleProps need to be applied to the node that you want to be the drag handle.
                      // This is a number of props that need to be applied to the Draggable node
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {/* This is used to create space in the Droppable as needed during a drag */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
