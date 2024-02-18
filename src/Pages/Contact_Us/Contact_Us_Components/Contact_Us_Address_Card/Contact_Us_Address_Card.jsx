import { TfiLocationPin } from "react-icons/tfi";
import Contact_Us_Address_Single_Card from "./Contact_Us_Address_Single_Card/Contact_Us_Address_Single_Card";

const Contact_Us_Address_Card = () => {
  return (
   <>
      <section id="features" class=" px-4 space-y-6  bg-gradient-to-t from-[#cdffdb] to-transparent py-8 dark:bg-transparent md:py-12 lg:py-20">

      
        <div class="relative container flex flex-col justify-between items-center  px-4 mx-auto md:flex-row sm:px-6 ">
          <div class="flex justify-between mb-16 py-5 max-w-2xl p-8">
            <div class="text-left">
              <h2
                class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Let's Talk 
                <span class="font-bold text-[#2DBE61]"> Find our branches</span>
                {/* <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span> */}
              </h2>


            </div>
          </div>
          <div class="text-left">
            <h2 class="text-2xl font-extrabold leading-10 tracking-tight text-[#2DBE61] ">Our  BD Agent</h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>

          </div>
        </div>

        <div class="container mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         
          <Contact_Us_Address_Single_Card title="Agrani Bank Limited (ABL)"
            address="9D Dilkusha Commercial Area, Dhaka-1000, Bangladesh."
            phone="9566153-54 9566160-69,9566074-75"
            fax="(+8802) 956 2346, 956 3662"
            email="agrani@agranibank.org">


            </Contact_Us_Address_Single_Card>
             <Contact_Us_Address_Single_Card title="Agrani Bank Limited (ABL)"
            address="9D Dilkusha Commercial Area, Dhaka-1000, Bangladesh."
            phone="9566153-54 9566160-69,9566074-75"
            fax="(+8802) 956 2346, 956 3662"
            email="agrani@agranibank.org">

              
            </Contact_Us_Address_Single_Card>
         
  <Contact_Us_Address_Single_Card title="Agrani Bank Limited (ABL)"
            address="9D Dilkusha Commercial Area, Dhaka-1000, Bangladesh."
            phone="9566153-54 9566160-69,9566074-75"
            fax="(+8802) 956 2346, 956 3662"
            email="agrani@agranibank.org">

              
            </Contact_Us_Address_Single_Card>
      


          </div>

      </section>
  </>
  )
}

export default Contact_Us_Address_Card
