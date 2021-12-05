import * as L from "leaflet";

/**
 * 
 */
export const CursorControl = L.Control.extend({
    _container: null,
    options: {
        position: "bottomleft",
    },

    onAdd: function (map) {
        var latlng = L.DomUtil.create("div", "mouseposition");
        this._latlng = latlng;

        return latlng;
    },
});

(function () {
    const proto_initIcon = L.Marker.prototype._initIcon;
    const proto_setPos = L.Marker.prototype._setPos;

    L.Marker.addInitHook(function () {
        let iconOptions = this.options.icon && this.options.icon.options;
        let iconAnchor = iconOptions && this.options.icon.options.iconAnchor;

        if (iconAnchor) {
            iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
        }
        
        this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom';
        this.options.rotationAngle = this.options.rotationAngle || 0;

        this.on('drag', (e) => { e.target._applyRotation(); });
    });

    L.Marker.include({
        _initIcon: function () {
            proto_initIcon.call(this);
        },

        _setPos: function (pos) {
            proto_setPos.call(this, pos);
            this._applyRotation();
        },

        _applyRotation: function () {
            if (this.options.rotationAngle) {
                this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;
                this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
            }
        },

        setRotationAngle: function (angle) {
            this.options.rotationAngle = angle;
            this.update();
            
            return this;
        },

        setRotationOrigin: function (origin) {
            this.options.rotationOrigin = origin;
            this.update();

            return this;
        }
    });
})();