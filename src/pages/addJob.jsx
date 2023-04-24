const AddJob = () => {
  return (
    <section className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Pozisyon</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label>Şirket</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label>Lokasyon</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label>Durum</label>
          <select>
            <option>Mülakat</option>
            <option>Devam Ediyor</option>
            <option>Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label>Tür</label>
          <select>
            <option>Tam Zaman</option>
            <option>Yarı Zaman</option>
            <option>Uzaktan</option>
            <option>Staj</option>
          </select>
        </div>

        <button>Ekle</button>
      </div>
    </section>
  );
};

export default AddJob;
