import React from 'react';
if (!selectedId) { transformerRef.current.nodes([]); transformerRef.current.getLayer() && transformerRef.current.getLayer().batchDraw(); return; }
const sel = stageRef.current && stageRef.current.findOne(`#sticker-${selectedId}`);
if (sel) { transformerRef.current.nodes([sel]); transformerRef.current.getLayer() && transformerRef.current.getLayer().batchDraw(); }
}, [selectedId, stickers]);


return (
<div>
<div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
<input type="file" accept="image/*" onChange={(e)=>handlePhotoUpload(e.target.files[0])} />
<button onClick={() => { /* download logic left out for brevity */ }}>Download (builds original resolution)</button>
</div>


<div style={{ display: 'flex', gap: 16 }}>
<div style={{ width: 280 }}>
<div style={{ marginBottom: 12 }}>
<div style={{ marginBottom: 8 }}>Stickers palette</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
{palette.map((p, i) => (
<div key={i} style={{ width: 60, height: 60, border: '2px solid #ccc', cursor:'pointer', backgroundImage:`url(${p})`, backgroundSize:'cover', backgroundPosition:'center' }} onClick={()=>addSticker(p,true)} />
))}
</div>
</div>
</div>


<div style={{ border: '6px solid #333', padding: 8, background: '#fff' }}>
{photo ? (
<Stage width={canvasSize.width} height={canvasSize.height} ref={stageRef}>
<Layer>
<KonvaImage image={photoImage} x={0} y={0} width={canvasSize.width} height={canvasSize.height} />


{stickers.map(s => s.isImage ? (
imagesMap[s.id] ? (
<KonvaImage key={s.id} id={`sticker-${s.id}`} image={imagesMap[s.id]} x={s.x} y={s.y} width={s.width} height={s.height} offsetX={s.width/2} offsetY={s.height/2} draggable onClick={()=>setSelectedId(s.id)} onDragEnd={(e)=>{ setStickers(prev=>prev.map(x=> x.id===s.id?{...x, x: e.target.x(), y: e.target.y() }:x)) }} />
) : null
) : (
<KonvaText key={s.id} id={`sticker-${s.id}`} text={s.content} x={s.x} y={s.y} fontSize={s.width} offsetX={s.width/2} offsetY={s.height/2} draggable onClick={()=>setSelectedId(s.id)} />
))}


<Transformer ref={transformerRef} />
</Layer>
</Stage>
) : (
<div style={{ width: 600, height: 600, display:'flex', alignItems:'center', justifyContent:'center', color:'#999' }}>Upload a photo to start</div>
)}
</div>
</div>
</div>
);
}
