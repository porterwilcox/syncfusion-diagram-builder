/**
 *  Theme handler
 */

DiagramTheme = (function () {
    function DiagramTheme(selectedItem) {
        this.nodeOldStyles = [];
        this.connectorOldStyles = [];
        this.isThemeApplied = false;
        this.colorList = [
            {
                themeName: 'theme1', themeStyle: [
                    { fillColor: '#F0F0F0', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#E3E3E3', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#ffffff', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#D2D2D2', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType4' }
                ], lineColor: '#6A696A', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme2', themeStyle: [
                    { fillColor: '#F0F0F0', borderColor: '#ABABAB', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#6A696A', borderColor: '#6A696A', textColor: '#FFFFFF', type: 'shapeType2' },
                    { fillColor: '#FFFFFF', borderColor: '#ABABAB', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#161415', borderColor: '#161415', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#6A696A', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme3', themeStyle: [
                    { fillColor: '#D8EBEC', borderColor: '#77B4B7', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#F4E6CE', borderColor: '#D8B983', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#F3CBDB', borderColor: '#F4B1CC', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#528AD8', borderColor: '#174F9C', textColor: '#000000', type: 'shapeType4' }
                ], lineColor: '#18519D', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme4', themeStyle: [
                    { fillColor: '#A9DDD8', borderColor: '#00AE9D', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#F4E0BB', borderColor: '#FBB63D', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#B5DAEA', borderColor: '#29A4DA', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#D69BC1', borderColor: '#C360A0', textColor: '#000000', type: 'shapeType4' }
                ], lineColor: '#C86DA7', lineType: 'Bezier'
            },
            {
                themeName: 'theme5', themeStyle: [
                    { fillColor: '#BFEAE5', borderColor: '#96C7BF', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#F8ECC4', borderColor: '#C3B58B', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#E8E2FF', borderColor: '#CFC4FB', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#F7E2E5', borderColor: '#D4A8AF', textColor: '#000000', type: 'shapeType4' }
                ], lineColor: '#4D4D4D', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme6', themeStyle: [
                    { fillColor: '#FFE9E1', borderColor: '#F6D2C4', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#DFEEE4', borderColor: '#ACD9BB', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#FFF8F6', borderColor: '#FFE7E0', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#B2ABA9', borderColor: '#161415', textColor: '#000000', type: 'shapeType4' }
                ], lineColor: '#161415', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme7', themeStyle: [
                    { fillColor: '#9FE3DD', borderColor: '#49C7BC', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#2EA499', borderColor: '#50BFB5', textColor: '#FFFFFF', type: 'shapeType2' },
                    { fillColor: '#E6F5F7', borderColor: '#9FE3DD', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#13615A', borderColor: '#13615A', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#13615A', lineType: 'Bezier'
            },
            {
                themeName: 'theme8', themeStyle: [
                    { fillColor: '#F5F2D7', borderColor: '#E4D772', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#FCEBFF', borderColor: '#F8CAFF', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#EAE4F2', borderColor: '#D3BDF1', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#551660', borderColor: '#551660', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#551660', lineType: 'Bezier'
            },
            {
                themeName: 'theme9', themeStyle: [
                    { fillColor: '#2CBAA7', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#EFC608', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType2' },
                    { fillColor: '#27BBD6', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#2B333C', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#2B333C', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme10', themeStyle: [
                    { fillColor: '#8DAF5B', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType1' },
                    { fillColor: '#E6B15A', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType2' },
                    { fillColor: '#2683A8', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType3' },
                    { fillColor: '#E64759', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#E64759', lineType: 'Bezier'
            },
            {
                themeName: 'theme11', themeStyle: [
                    { fillColor: '#46B38E', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType1' },
                    { fillColor: '#42A5F5', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType2' },
                    { fillColor: '#9F86FF', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType3' },
                    { fillColor: '#E64759', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#696969', lineType: 'Orthogonal'
            },
            {
                themeName: 'theme12', themeStyle: [
                    { fillColor: '#78BFFE', borderColor: '#5AAAFF', textColor: '#000000', type: 'shapeType1' },
                    { fillColor: '#288CF7', borderColor: '#288CF7', textColor: '#FFFFFF', type: 'shapeType2' },
                    { fillColor: '#BCDEF8', borderColor: '#8ECAFF', textColor: '#000000', type: 'shapeType3' },
                    { fillColor: '#054F96', borderColor: '#054F96', textColor: '#FFFFFF', type: 'shapeType4' }
                ], lineColor: '#054F96', lineType: 'Bezier'
            }
        ];
        this.selectedItem = selectedItem;
    }
    DiagramTheme.prototype.getShapeType = function (shapeType) {
        if (shapeType === 'Ellipse' || shapeType === 'Terminator') {
            return 'shapeType2';
        }
        else if (shapeType === 'Plus' || shapeType === 'Star' || shapeType === 'Diamond' || shapeType === 'Decision') {
            return 'shapeType4';
        }
        else if (shapeType === 'Hexagon' || shapeType === 'Parallelogram' || shapeType === 'Trapezoid' || shapeType === 'Cylinder') {
            return 'shapeType3';
        }
        else if (shapeType === 'DirectData' || shapeType === 'SequentialData' || shapeType === 'Sort' || shapeType === 'MultiDocument' ||
            shapeType === 'Collate' || shapeType === 'Or' || shapeType === 'InternalStorage' || shapeType === 'SequentialAccessStorage' ||
            shapeType === 'Annotation2' || shapeType === 'ManualInput' || shapeType === 'StoredData') {
            return 'shapeType3';
        }
        else {
            return 'shapeType1';
        }
    };
    DiagramTheme.prototype.getShapeStyle = function (shapeType, themeStyle) {
        for (var i = 0; i < themeStyle.length; i++) {
            if (themeStyle[i].type === shapeType) {
                return themeStyle[i];
            }
        }
        return null;
    };
    DiagramTheme.prototype.getThemeStyle = function (themeName) {
        for (var i = 0; i < this.colorList.length; i++) {
            if (this.colorList[i].themeName === themeName) {
                return this.colorList[i];
            }
        }
        return null;
    };
    DiagramTheme.prototype.themeMouseOver = function (args) {
        var target = args.target;
        var diagram = this.selectedItem.selectedDiagram;
        if (target.className === 'db-theme-style-div') {
            var themeName = target.children[0].className.replace('db-theme-style ', '');
            this.applyStyle(themeName);
            this.isThemeApplied = true;
        }
    };
    DiagramTheme.prototype.applyOldStyle = function () {
        var diagram = this.selectedItem.selectedDiagram;
        diagram.historyManager.startGroupAction();
        for (var i = 0; i < this.nodeOldStyles.length; i++) {
            var themeStyle = this.nodeOldStyles[i];
            var node = MindMapUtilityMethods.getNode(diagram.nodes, this.nodeOldStyles[i].name.toString());
            node.style.fill = themeStyle.fill.toString();
            node.style.strokeColor = themeStyle.border.toString();
            if (node.annotations.length > 0) {
                if (!node.annotations[0].hyperlink) {
                    node.annotations[0].style.color = themeStyle.fontColor;
                }
            }
            diagram.dataBind();
        }
        for (var i = 0; i < this.connectorOldStyles.length; i++) {
            var themeStyle = this.connectorOldStyles[i];
            var connector = MindMapUtilityMethods.getConnector(diagram.connectors, this.connectorOldStyles[i].name.toString());
            connector.style.strokeColor = themeStyle.border.toString();
            connector.sourceDecorator.style.fill = connector.sourceDecorator.style.strokeColor = themeStyle.border.toString();
            connector.targetDecorator.style.fill = connector.targetDecorator.style.strokeColor = themeStyle.border.toString();
            connector.type = themeStyle.type;
            diagram.dataBind();
        }
        this.isThemeApplied = false;
        diagram.historyManager.endGroupAction();
    };
    DiagramTheme.prototype.themeClick = function (args) {
        var target = args.target;
        if (target.classList.contains('db-theme-style-div')) {
            var themeName = target.children[0].className.replace('db-theme-style ', '');
            this.selectedItem.themeStyle = themeName;
            this.applyStyle(themeName);
            this.setNodeOldStyles();
            for (var i = 0; i < this.colorList.length; i++) {
                var element = document.getElementsByClassName(String(this.colorList[i].themeName))[0].parentNode;
                if (element.classList.contains('db-theme-focus-style-div')) {
                    element.classList.remove('db-theme-focus-style-div');
                }
                if (this.colorList[i].themeName === themeName) {
                    element.classList.add('db-theme-focus-style-div');
                }
            }
            this.selectedItem.isModified = true;
        }
    };
    DiagramTheme.prototype.setNodeOldStyles = function () {
        this.nodeOldStyles = [];
        this.connectorOldStyles = [];
        var diagram = this.selectedItem.selectedDiagram;
        if (diagram.nodes.length > 0) {
            var nodes = diagram.nodes;
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                var style = { name: node.id, 'fill': node.style.fill, 'border': node.style.strokeColor };
                if (node.annotations.length > 0) {
                    if (!node.annotations[0].hyperlink) {
                        style.fontColor = node.annotations[0].style.color;
                    }
                }
                this.nodeOldStyles.push(style);
            }
        }
        if (diagram.connectors.length > 0) {
            var connectors = diagram.connectors;
            for (var i = 0; i < connectors.length; i++) {
                var connector = connectors[i];
                this.connectorOldStyles.push({ name: connector.id, 'border': connector.style.strokeColor, 'type': connector.type });
            }
        }
    };
    DiagramTheme.prototype.applyStyle = function (themeName) {
        var themeType = this.getThemeStyle(themeName);
        var diagram = this.selectedItem.selectedDiagram;
        diagram.historyManager.startGroupAction();
        if (diagram.nodes.length > 0) {
            var nodes = diagram.nodes;
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                if (node.style.gradient) {
                    node.style.gradient.type = 'None';
                }
                this.applyThemeStyleforElement(node, themeType);
            }
        }
        if (diagram.connectors.length > 0 && themeType) {
            var connectors = diagram.connectors;
            for (var i = 0; i < connectors.length; i++) {
                var connector = connectors[i];
                this.applyThemeStyleforElement(connector, themeType);
            }
            diagram.dataBind();
        }
        diagram.historyManager.endGroupAction();
    };
    DiagramTheme.prototype.applyThemeStyleforElement = function (element, themeName) {
        var themeType;
        if (!themeName) {
            themeType = this.getThemeStyle(this.selectedItem.themeStyle);
        }
        else {
            themeType = themeName;
        }
        var diagram = this.selectedItem.selectedDiagram;
        diagram.historyManager.startGroupAction();
        if (element instanceof ej.diagrams.Node) {
            var node = element;
            if (node.shape) {
                var shapeStyle = null;
                if (node.shape.type === 'Flow' || node.shape.type === 'Basic') {
                    var shapeModel = node.shape;
                    shapeStyle = this.getShapeStyle(this.getShapeType(shapeModel.shape), themeType.themeStyle);
                    if (shapeStyle) {
                        node.style.fill = shapeStyle.fillColor;
                        node.style.strokeColor = shapeStyle.borderColor;
                        if (node.annotations.length > 0) {
                            if (!(node.annotations[0].hyperlink && node.annotations[0].hyperlink.link)) {
                                node.annotations[0].style.color = shapeStyle.textColor;
                            }
                        }
                        diagram.dataBind();
                    }
                }
            }
        }
        else if (element instanceof ej.diagrams.Connector) {
            var connector = element;
            connector.style.strokeColor = themeType.lineColor.toString();
            connector.sourceDecorator.style.fill = connector.sourceDecorator.style.strokeColor = themeType.lineColor.toString();
            connector.targetDecorator.style.fill = connector.targetDecorator.style.strokeColor = themeType.lineColor.toString();
            connector.type = themeType.lineType;
            diagram.dataBind();
        }
        diagram.historyManager.endGroupAction();
    };
    return DiagramTheme;
}());
