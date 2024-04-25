import React, { useState } from 'react';

function ResetPassword({ token }) { // 이 컴포넌트는 token을 props로 받아와야 합니다.
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const response = await fetch('/api/resetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, password })
        });

        if (response.ok) {
            alert('비밀번호가 성공적으로 재설정되었습니다.');
        } else {
            alert('비밀번호 재설정에 실패했습니다.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="password">새 비밀번호:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <label htmlFor="confirmPassword">비밀번호 확인:</label>
            <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit">비밀번호 재설정</button>
        </form>
    );
}

export default ResetPassword;

