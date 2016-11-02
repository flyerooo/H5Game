/**
 * Created by Administrator on 2016/11/2.
 */
(function (document) {
    
    function DomObject(dom) {
        this.dom = dom;
    }
    DomObject.prototype.get =function () {
        return this.dom;
    };

    DomObject.prototype.on = function (eventName, eventHandler) {
        this.get().addEventListener(eventName, eventHandler);
    };

    DomObject.prototype.css = function (styleKey, styleValue) {
        this.get().style[styleKey] = styleValue;
    };

    function $(selector, context) {
        return new DomObject((context || document).querySelector(selector));
    }
    
    function _init() {
        $('#btn-start').on('click', function (ev) {
            $('.start-container').css('display','none');
            $('.game-container').css('display','block');
        });
    }

    function _init() {
        document.getElementById()
    }
    document.addEventListener('DOMContentLoad', function (ev) {
        this._init();
    })
})(document);