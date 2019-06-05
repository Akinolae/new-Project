function weather(updateCity, description){
        this.cityName = updateCity;
        this.description = description;
        this._temperature = '';
}
Object.defineProperty(weather.prototype, 'temperature', {
    get:function(){
        return this._temperature;
    },
    set:function(value){
        this._temperature = (value * 1.8 + 32).toFixed(2) + ' F.'
    }
});