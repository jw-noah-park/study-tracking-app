import React, { useState } from 'react';

function forgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    try {
        const response = await fetch('api/forgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            alert('비밀번호 재설정 링크가 이메일로 발송되었습니다.');
        } else {
            const errorData = await response.json(); // Assuming the server sends a JSON response on error
            console.error('Failed to send email:', errorData.message);
            alert('이메일 발송에 실패했습니다.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('네트워크 오류가 발생했습니다.');
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">이메일:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <button type="submit">비밀번호 재설정 링크 받기</button>
        </form>
    );
}

export default forgotPassword;

