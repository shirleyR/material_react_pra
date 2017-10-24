
import tinycolor from 'tinycolor2';

class PickerField extends React.Component{
    render(){
        return (
            <div className="rc-picker-field"
                 style={style.color}
                 ref = {}
                 onMouseDown = {this.handleMouseDown}
                 onTouchMove ={this.handleChange}
                 onTouchStart= {this.handleChange}>
                <div className="saturation-white">
                    <div className="saturation-black"/>
                    <div style={styles.pointer}>
                        {
                            this.props.pointer ? (
                                <this.props.pointer {...this.props}/>
                            ):(
                                <div style={styles.circle}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}