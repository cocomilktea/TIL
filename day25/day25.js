wfSel = {};
(function(_self) {
    var _sel = window.getSelection();
    if (_sel) {
        _self = {
            getTEXT: function() {
                var _range = window.getSelection().getRangeAt(0);
                return _sel.toString();
            },
            getHTML: function() {
                var _range = window.getSelection().getRangeAt(0),
                    _content = _range.cloneContents(),
                    _span = document.createElement('span');
                    _span.appendChild(_content);
                return _span.innerHTML;
            },
            insert(_before, _after) {
                _before = _before ? _before : '';
                _after = _after ? _after : '';
                this.replace(_before + wfSel.getHTML() + _after);
             },
            replace: function(text) {
                var _range = window.getSelection().getRangeAt(0);
                var _node = document.createElement('span');
                _node.innerHTML = text;
                if (_node) _node = _node.childNodes[0];
                _range.deleteContents();
                _range.insertNode(_node);
            },
            removeTag: function() {
                this.replace(wfSel.getTEXT());
            }
        };
        window.wfSel = _self;
    }
})(wfSel);