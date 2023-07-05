import * as Automerge from '@automerge/automerge'

let doc = Automerge.init()
updateDoc(nil)

function updateDoc (fn) {
  const newDoc = Automerge.change(doc, fn)
  doc = newDoc
}

function nil () {}
