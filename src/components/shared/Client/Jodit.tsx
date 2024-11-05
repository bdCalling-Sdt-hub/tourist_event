'use client'
import React, { useRef, useState, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Jodit: React.FC = () => {
    const editor = useRef(null);
    const [content, setContent] = useState<string>('');

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...',
        toolbar: true,
        buttons: [
            'font', 'fontsize', '|', 'bold', 'italic', 'underline', '|',
            'align', '|', 'ul', 'ol', '|', 'link', 'image', '|', 'undo', 'redo'
        ],
        toolbarSticky: false,
        height: 300, // Set the height to 400px or adjust as needed
    }), []);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            //@ts-ignore
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={() => { }}
        />
    );
};

export default Jodit;
