function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var editedColumn = e.range.getColumn();
  var editedRow = e.range.getRow();
  
  // Change this number to match your trigger column
  if (editedColumn === 1 && editedRow > 1) {
    var timestampCell = sheet.getRange(editedRow, 2);
    timestampCell.setValue(new Date());
  }
}
