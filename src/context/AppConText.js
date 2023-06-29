import React, { createContext, useEffect, useState } from "react";
import zip1 from "../assets/zip1.png";
import zip2 from "../assets/zip2.png";
import zip3 from "../assets/zip3.png";
import zip4 from "../assets/zip4.png";
import zip5 from "../assets/zip5.png";
import zip6 from "../assets/zip6.png";
import zip7 from "../assets/zip7.png";
import zip8 from "../assets/zip8.png";
import zip9 from "../assets/zip9.png";
import zip10 from "../assets/zip10.png";
import zip11 from "../assets/zip11.png";
import zip12 from "../assets/zip12.png";
import zip13 from "../assets/zip13.png";
import zip14 from "../assets/zip14.png";
import zip15 from "../assets/zip15.png";
import zip16 from "../assets/zip16.png";
import zip17 from "../assets/zip17.png";
import zip18 from "../assets/zip18.png";
import zip19 from "../assets/zip19.png";
import zip20 from "../assets/zip20.png";
import zip21 from "../assets/zip21.png";
import AOS from "aos"
export const ConText = createContext();

const AppConText = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [products, setProducts] = useState([
    {
      id: "01",
      title: "Floral Gorilla Design",
      title1: "Universal Zippo",
      price: 36.95,
      img: zip1,
      content:
        "Biểu thị sức mạnh, trí tuệ và tinh thần nuôi dưỡng, một con khỉ đột dũng mãnh nhưng yên tĩnh là trọng tâm của chiếc bật lửa Flat Grey mượt mà này. Người khổng lồ hiền lành được bao quanh bởi những bông hoa và thực vật tinh tế trong thiết kế Hình ảnh màu hai mặt nhẹ nhàng này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "02",
      title: "Butterfly Design",
      title1: "Universal Zippo",
      price: 40.45,
      img: zip2,
      content:
        "Sẵn sàng cho chuyến bay đầu tiên, một con bướm tuyệt đẹp tinh tế mở rộng đôi cánh của nó xung quanh tất cả các mặt của chiếc bật lửa 540 tuyệt đẹp này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "03",
      title: "Tree Life Design",
      title1: "Universal Zippo",
      price: 35.5,
      img: zip3,
      content:
        "Quy trình In Kết cấu mang tính biểu tượng của chúng tôi mang lại cho Cây Sự sống sống động trên chiếc bật lửa White Matte này. Những chiếc lá tươi tốt nhường chỗ cho rễ cây sống động như thật trong thiết kế ba chiều hữu cơ thú vị này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "04",
      title: "Red Moon Desgin ",
      title1: "Universal Zippo",
      price: 28.95,
      img: zip4,
      content:
        "Một mặt trăng màu nước tuyệt đẹp rực sáng đằng sau một họa tiết hoa tinh tế trên chiếc bật lửa White Matte cổ điển này. Một vài đám mây kéo dài và những con chim kỳ quái nhấn mạnh thiết kế Hình ảnh màu thanh bình. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "05",
      title: "Howdy Cowboy",
      title1: "Universal Zippo",
      price: 32.95,
      img: zip5,
      content:
        "Chiếc bật lửa White Matte cổ điển này đã sẵn sàng cho thời gian vui vẻ của boot-scootin. Đôi đá yêu thích của bạn, một chiếc mũ mới sắc nét và một quả bóng disco rực rỡ xuất hiện trong thiết kế Hình ảnh màu và Khắc laser, vì vậy bạn có thể mang cuốc xuống bất cứ nơi nào bạn đi lang thang. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "06",
      title: "Lizard Fusion",
      title1: "Universal Zippo",
      price: 32.95,
      img: zip6,
      content:
        "Một con thằn lằn nhàn nhã trên bề mặt chiếc bật lửa High Polish Brass rực rỡ này. Quy trình Fusion của chúng tôi được sử dụng để mô tả loài bò sát thư giãn với màu sắc rực rỡ với các vết phá vỡ kim loại đặc trưng cho hiệu ứng ánh kim, lung linh. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "07",
      title: "Abstract Faces Design",
      title1: "Universal Zippo",
      price: 40.45,
      img: zip7,
      content:
        "This 540 Color lighter showcases a seamless series of abstract line portraits and botanicals over a soothing watercolor backdrop for a contemporary take on a timeless genre. Comes packaged in a gift box. For optimal performance, fill with Zippo lighter fuel.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "08",
      title: "Boxing Design",
      title1: "Universal Zippo",
      price: 32.95,
      img: zip8,
      content:
        "Chiếc bật lửa này gói một cú đấm. Cho dù bạn tham gia vào môn thể thao này hay chỉ chiêm ngưỡng những người vĩ đại, thiết kế trên chiếc bật lửa White Matte này sẽ khiến bạn nổi như một con bướm. Một đôi găng tay ba chiều nhô lên khỏi bề mặt bằng cách sử dụng các quy trình In kết cấu và Hình ảnh màu của chúng tôi. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "09",
      title: "Graffiti Peace Design",
      title1: "Universal Zippo",
      price: 28.95,
      img: zip9,
      content:
        "Graffiti đang đi từ đường phố đến bật lửa chống gió yêu thích của bạn. Thiết kế nghệ thuật này miêu tả một bàn tay đưa ra dấu hiệu hòa bình, đã được chụp ảnh màu trên bật lửa Iron Stone gồ ghề, giống như nghệ thuật đường phố trên một bức tường đá. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.      ",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "10",
      title: "18 Kt.gold",
      title1: "Premium Zippo",

      price: 200.033,
      img: zip10,
      content:
        "Đó là niềm đam mê tột bậc. Với sự sang trọng tinh tế, chiếc bật lửa chống gió Zippo này với vỏ vàng nguyên khối 18kt cho cảm giác chắc chắn, trông đáng kể và hoàn toàn tuyệt đẹp. Bao gồm một miếng lót bật lửa mạ vàng và hộp quà quả thủ công tùy chỉnh với giấy chứng nhận đăng ký.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "11",
      title: "Bimetall (Copper Bottom)",
      title1: "Premium Zippo",
      price: 300.0,
      img: zip11,
      content:
        "Tiếp nối thành công của chương trình Vỏ đồng rắn, Zippo rất vui mừng lần đầu tiên giới thiệu bật lửa Bimetal Case. Được xây dựng bằng cả đồng nguyên khối và bạc sterling rắn và được đánh bóng cao, màn trình diễn tuyệt đẹp này đánh dấu bước đột phá thứ hai của Zippo vào các trường hợp hybrid trong lịch sử của nó - lần đầu tiên là chạy thử nghiệm cực kỳ hạn chế vào năm 2007.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "12",
      title: "Luxury Diamond Design",
      title1: "Premium Zippo",
      price: 230.0,
      img: zip12,
      content:
        "Các lớp kết cấu bao bọc tấm vàng Armor® High Polish Gold Plate này Quy trình khắc MultiCut 360 ° của Zippo tạo ra một mô hình thanh lịch của kim cương và các đường nét rạng rỡ, với sự hoàn thiện của hình dạng kim cương chứa đầy epoxy màu đỏ mờ được đặt vào bên cạnh bật lửa Một miếng mạ vàng tôn vinh và hoàn thiện vẻ ngoài cao cấp và bao bì sang trọng làm nổi bật thiết kế bọc. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "13",
      title: "Currency Design",
      title1: "Premium Zippo",
      price: 210.0,
      img: zip13,
      content:
        "Một khoản đầu tư được đảm bảo để duy trì sự vững chắc. Thiết kế lấy cảm hứng từ tiền điện tử toát lên sự sang trọng trên tất cả các mặt của chiếc bật lửa Armor® High Polish Gold này nhờ quy trình MultiCut Deep Carve của chúng tôi. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "14",
      title: "Armor® Tree of Life",
      title1: "Premium Zippo",
      price: 97.0,
      img: zip14,
      content:
        "Thiết kế MultiCut hài hòa này được đặt trên bật lửa Armor® Antique Silver có Cây Sự sống, kết nối mọi sinh vật sống, quá khứ, hiện tại và tương lai với Trái đất. Bông hoa sự sống, một trong những ví dụ sớm nhất về hình học thiêng liêng, đại diện cho mối liên hệ vĩnh cửu giữa không gian và thời gian được thể hiện ở mặt sau của chiếc bật lửa này. Bao bì sang trọng cho thấy các yếu tố góc lấy cảm hứng từ Art Nouveau bọc ở hai bên bật lửa cho phép xem rõ hơn các chi tiết nhẹ hơn này. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "15",
      title: "Armor® High Polish Blue Diamonds",
      title1: "Premium Zippo",
      price: 115.0,
      img: zip15,
      content:
        "Các phương pháp điều trị chạm khắc sâu và MultiCut rực rỡ trên chiếc bật lửa đánh bóng cao này, thêm nhiều tia sáng màu sắc rực rỡ hơn. Chiếc bật lửa Armor® High Polish Blue này đã được chạm khắc sâu ở mặt trước và mặt sau, tạo ra một hoa văn kim cương jacquard thanh lịch. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "16",
      title: "Armor® Fleur-de-lis Design",
      title1: "Premium Zippo",
      price: 140.25,
      img: zip16,
      content:
        "Biểu tượng Fleur-De-Lis biểu thị cuộc sống, ánh sáng và sự hoàn hảo. Dựa trên hoa huệ truyền thống, biểu tượng này đã được khắc xung quanh bật lửa Tấm vàng Ba Lan cao bằng quy trình MultiCut. Vòng tròn màu xanh lá cây ở trung tâm của bông hoa mang lại một màu sắc nổi bật cho thiết kế bằng phương pháp khảm epoxy. Bao bì sang trọng cho phép xem nhiều hơn các chi tiết thiết kế MultiCut, cho phép thiết kế cao cấp này nổi bật trong đám đông. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "17",
      title: "Founder's Day Collectible",
      title1: "Premium Zippo",
      price: 120.0,
      img: zip17,
      content:
        "Xây dựng sản phẩm của bạn với sự chính trực, đứng đằng sau nó 100%, và thành công sẽ theo sau. Lời khuyên đơn giản này, được đưa ra bởi người sáng lập Zippo George G. Blaisdell, đã hướng dẫn sự cống hiến của Zippo về chất lượng và dịch vụ kể từ khi thành lập vào năm 1932 - và là lý do chính khiến Zippo vẫn là một trong những thương hiệu được yêu thích nhất trên thế giới hiện nay.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "18",
      title: "SunBeam Pendant",
      title1: "Premium Zippo",
      price: 76.5,
      img: zip18,
      content:
        "Chiếc bật lửa Armor® High Polish Brass này duyên dáng nắm bắt vẻ đẹp của mặt trời trên mặt nước thanh bình trong thiết kế Deep Carve hai mặt sang trọng. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
      count: 1,
    },
    {
      id: "19",
      title: "Rechargeable Candle Lighter",
      title1: "Utility",
      price: 25.45,
      img: zip19,
      content:
        "Bật lửa nến có thể sạc lại mới của Zippo không cần nạp lại và không cần butan. Bật lửa chùm tia đơn cung cấp hồ quang chống gió và có thể dễ dàng sạc lại bằng dây sạc đi kèm. Đi kèm đóng gói trong một hộp.",
      height: "10.2″ ",
      width: " 0.85″",
      count: 1,
    },

    {
      id: "20",
      title: "Flex Neck XL Utility Lighter",
      title1: "Utility",
      price: 24.45,
      img: zip20,
      content:
        "Its bendable 13” neck, dual flame and all metal construction gives you the power and flexibility to fit into tight spots and flame through stiff winds. They’re great for lighting camping stoves, lanterns, water heaters, candles, BBQ grills and more. Comes packaged in a blister pack.",
      height: " 19.5″",
      width: "1.2″",
      count: 1,
    },

    {
      id: "21",
      title: "Flex Neck Utility Lighter",
      title1: "Utility",
      price: 21.95,
      img: zip21,
      content:
        "Không có cách nào tốt hơn để bắt đầu đám cháy trong một cơn gió mạnh. Công nghệ ngọn lửa kép giữ cho ngọn lửa cháy mạnh và cổ linh hoạt định vị chính xác nhiệt theo bất kỳ hướng nào. Đầu khổ hẹp đủ nhỏ để tiếp cận các điểm chật hẹp trong đèn lồng và bếp cắm trại. Chúng rất tuyệt vời để thắp nến, vỉ nướng BBQ và hơn thế nữa. Cứng cáp, tất cả đều được xây dựng bằng kim loại. Cổ Flex này không được lấp đầy. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu butan Zippo. Đi kèm đóng gói trong một vỉ.",
      height: " 19.5″",
      width: "1.2″",
      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [filterItem, setFilterItem] = useState ([])
  const [datafilter, setDataFilter] = useState ([])
  // local storage
  useEffect(() => {
    if (cart?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCart(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  // add cart
  const handleAddToCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the products has been added to cart");
    }
  };


// scroll animation
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  
// filter 
  // const filteredProduct = products.filter (product => {
  //   filterItem === "Universal Zippo"
  //   ? product.
  // })
  useEffect(() => {
    setDataFilter(products);
    setFilterItem([...new Set(products.map((item) => item.title1))]);
  }, []);

  const gallery__filter = (itemData) => {
    const fillterItems = products.filter((item) => item.title1 == itemData);
    setDataFilter(fillterItems);
  };


  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    handleAddToCart: handleAddToCart,
    gallery__filter:gallery__filter,
    setDataFilter:setDataFilter,
    filterItem:filterItem,
    datafilter:datafilter,
  };
 
  return <ConText.Provider value={value}>{children}</ConText.Provider>;
};

export default AppConText;
