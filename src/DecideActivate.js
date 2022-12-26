import React, { Component } from 'react'

class DecideActivate extends Component {
    constructor(props) {
        super(props);
    
 
        this.state={
            latitude:null,
            error:""
        };
    

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
            this.setState({
                latitude: position.coords.latitude
            });
        },
    
      (err) => {
        console.log(err);
        this.setState({
            error:"Kullanici Lokasyon Bilgisini Paylaşmadi."
        });
      }
      );
  }

    componentWillUnmount(){
        this.state({
            latitude:0
        });
    }

    DecideActivate(lat)
    {
        const currentMonth=new Date().getMonth();
        const summer={
            text:"Yüzmeye Zamani",
            iconName:"sun"
        }
        const winter={
            text:"Snownoard Zamani",
            iconName:"snowflake"
        }
        if(lat<0)
        {
            //Güney yarımküre

            return currentMonth > 5 && currentMonth < 8 ? winter : summer;
        }
        else
        {
            //Kuzey yarımküre

            return currentMonth > 8 || currentMonth < 5 ? winter : summer

        }
    }

  render() {
    const{latitude, error} = this.state;
          
      if(latitude !== 0 && !error)
      {

        const activate=this.DecideActivate(latitude);
        return(
            <h2 className="ui header">
            <i className={`${activate.iconName} outline icon`}></i>
           
            <div className="content">
                {activate.text}
            </div>
            </h2>
        )
      }

      else if(!latitude && error)
      {
        return(
            <div>
                Hata : {error}
            </div>
        )
      }
    return (
        <div>

            Loading....
        </div>

    )
  }
}

export default DecideActivate;