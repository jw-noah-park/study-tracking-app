import request from 'supertest';
import handler from '../src/pages/api/memos'; 

describe('Memos API', () => {
  it('should fetch memos', async () => {
    const response = await request(handler) 
      .get('/api/memos');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('should add a memo', async () => {
    const response = await request(handler) 
      .post('/api/memos')
      .send({ content: 'Test memo content' });

    expect(response.status).toBe(201);
    expect(response.body.content).toBe('Test memo content');
  });

  it('should delete a memo', async () => {

    const newMemoResponse = await request(handler) 
      .post('/api/memos')
      .send({ content: 'Test memo to delete' });

    const memoId = newMemoResponse.body.id;


    const deleteResponse = await request(handler) 
      .delete(`/api/memos/${memoId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe('Memo deleted successfully');
  });
});
