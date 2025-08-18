(function () {
    const shapeSelect = document.getElementById('shape');
    const parametersDiv = document.getElementById('parameters');
    const calculateButton = document.getElementById('calculate');
    const areaSpan = document.getElementById('area');


    function generateInputFields(shape) {
        parametersDiv.innerHTML = '';
        let html = '';

        switch (shape) {
            case 'circle':
                html += '<label for="radius">Radius:</label>';
                html += '<input type="number" id="radius" required>';
                break;
            case 'rectangle':
                html += '<label for="length">Length:</label>';
                html += '<input type="number" id="length" required>';
                html += '<label for="width">Width:</label>';
                html += '<input type="number" id="width" required>';
                break;
            case 'triangle':
                html += '<label for="base">Base:</label>';
                html += '<input type="number" id="base" required>';
                html += '<label for="height">Height:</label>';
                html += '<input type="number" id="height" required>';
                break;
        }

        parametersDiv.innerHTML = html;
    }


    function calculateArea(shape) {
        let area = 0;


        function circleArea(radius) {
            return Math.PI * radius * radius;
        }


        function rectangleArea(length, width) {
            return length * width;
        }


        function triangleArea(base, height) {
            return 0.5 * base * height;
        }

        switch (shape) {
            case 'circle':
                const radius = parseFloat(document.getElementById('radius').value);
                if (!isNaN(radius)) {
                    area = circleArea(radius);
                }
                break;
            case 'rectangle':
                const length = parseFloat(document.getElementById('length').value);
                const width = parseFloat(document.getElementById('width').value);
                if (!isNaN(length) && !isNaN(width)) {
                    area = rectangleArea(length, width);
                }
                break;
            case 'triangle':
                const base = parseFloat(document.getElementById('base').value);
                const height = parseFloat(document.getElementById('height').value);
                if (!isNaN(base) && !isNaN(height)) {
                    area = triangleArea(base, height);
                }
                break;
        }

        return area;
    }


    shapeSelect.addEventListener('change', function () {
        generateInputFields(this.value);
    });

    calculateButton.addEventListener('click', function () {
        const selectedShape = shapeSelect.value;
        const area = calculateArea(selectedShape);

        if (!isNaN(area)) {
            areaSpan.textContent = area.toFixed(2);
        } else {
            areaSpan.textContent = 'Invalid input';
        }
    });


    generateInputFields(shapeSelect.value);
})(); 