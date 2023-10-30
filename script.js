


async function loadLocalJsonFile() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('ไม่สามารถโหลดข้อมูลได้');
    }

    const data = await response.json();
    
    
    
    const reaction_score = document.getElementById('reaction_score');

    const memory_score = document.getElementById('memory_score');

    const verbal_score = document.getElementById('verbal_score');

    const visual_score = document.getElementById('visual_score');
    
    reaction_score.innerText = data[0].score;
    memory_score.innerText = data[1].score;
    verbal_score.innerText = data[2].score;
    visual_score.innerText = data[3].score;

  } catch (error) {
    console.error('เกิดข้อผิดพลาด: ' + error);
  }
}

loadLocalJsonFile();