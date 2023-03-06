import api from "../../framework/utils/api/api.util.js"
import {assert} from "chai"
import data from "../../data/api/api.data.json" assert {type: "json"}
import sort from "../../framework/utils/sort/sort.util.js"


describe("Rest API", function() {

  it("Post are sorted in ascending order by id", async ()=>{
    const response = await api.get(data.case1.url)
    const statusCode = response.status
    assert.strictEqual(statusCode, data.case1.statusCode, `Status code equalls to ${data.case1.statusCode}`)
    const contentType = response.headers["content-type"]
    assert.include(contentType, data.case1.contentType, `Content type is ${data.case1.contentType}`)
    const isSortedByAscending = sort.isSortedByAscending(response.data, data.case1.sortBy)
    assert.isTrue(isSortedByAscending, `Post are sorted ascending by ${data.case1.sortBy}`)
  })

  it("Post information is correct", async() => {
    const response = await api.get(data.case2.url)
    const statusCode = response.status
    assert.strictEqual(statusCode, data.case2.statusCode, `Status code equalls to ${data.case2.statusCode}`)
    const {userId, id, title, body} = response.data
    assert.strictEqual(userId, data.case2.userId, `User-id is equall to ${data.case2.userId}`)
    assert.strictEqual(id, data.case2.id, `id is equall to 99 ${data.case2.id}`)
    assert.isOk(title, "Title is not empty")
    assert.isOk(body, "Body is not empty")
  })

  it(`Status code is ${data.case3.statusCode} and response body is empty`, async()=> {
    let statusCode,body;
    try{
      const response = await api.get(data.case3.url)
    }catch(e){
      statusCode = e.response.status;
      body = e.response.data
    }
    assert.strictEqual(statusCode, data.case3.statusCode, `Status code is ${data.case3.statusCode}`)
    assert.deepEqual(body, {}, "Response body is empty Object")    
  })

  it(`Post information is correct and status code is ${data.case4.statusCode}`, async () => {
    const response = await api.post(data.case4.url, {
      userId: data.case4.userId,
      title: data.case4.title,
      body: data.case4.body
    })
    const statusCode = response.status
    assert.strictEqual(statusCode, data.case4.statusCode, `Status code equalls to ${data.case4.statusCode}`)
    const {userId, id, title, body} = response.data
    assert.strictEqual(userId, data.case4.userId, `User-id is equall to ${data.case4.userId}`)
    assert.isOk(id, "Id is present")
    assert.isOk(title, data.case4.title)
    assert.isOk(body, data.case4.body)
  })
  it("User has correct data", async () => {
    const response = await api.get(data.case5.url)
    const statusCode = response.status
    assert.strictEqual(statusCode, data.case5.statusCode, `Status code equalls to ${data.case5.statusCode}`)
    const contentType = response.headers["content-type"]
    assert.include(contentType, data.case5.contentType, `Content type is ${data.case5.contentType}`)
    const user = response.data[data.case5.userExpected.id - 1]
    data.case5.actualUser = user
    assert.deepEqual(user, data.case5.userExpected, `User with id ${data.case5.userExpected.id} has correct data`)
  })

  it("User data matches with user data in the previous step", async () => {
    const response = await api.get(data.case6.url)
    const statusCode = response.status
    assert.strictEqual(statusCode, data.case6.statusCode)
    assert.deepEqual(response.data, data.case5.actualUser, "User data matches")
  })
})