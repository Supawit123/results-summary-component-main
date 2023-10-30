async function loadLocalJsonFile() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('ไม่สามารถโหลดข้อมูลได้');
    }
    /* แปลงข้อมูลใน json มาใส่ ตัวแปร data*/
    const data = await response.json();
    
    const reaction_score = document.getElementById('reaction_score');
    const memory_score = document.getElementById('memory_score');
    const verbal_score = document.getElementById('verbal_score');
    const visual_score = document.getElementById('visual_score');
    
    reaction_score.innerText = data[0].score;
    memory_score.innerText = data[1].score;
    verbal_score.innerText = data[2].score;
    visual_score.innerText = data[3].score;
    
    const reaction_icon = document.querySelector('#reaction_icon');
    const memory_icon = document.querySelector('#memory_icon');
    const verbal_icon = document.querySelector('#verbal_icon');
    const visual_icon = document.querySelector('#visual_icon');
    
    reaction_icon.src= data[0].icon;
    memory_icon.src=data[1].icon;
    verbal_icon.src=data[2].icon;
    visual_icon.src=data[3].icon;

  } catch (error) {
    console.error('เกิดข้อผิดพลาด: ' + error);
  }
}
loadLocalJsonFile();
    
