const axios = require('axios');
const planIds = require('./planIds.json')
const { calculateUpdatedDateAfterMonths } = require('./date')
const envDomain = 'https://sandbox2.acko.com'

planIds.forEach(id => updateMasterPolicy(id))

async function updateMasterPolicy(planId) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${envDomain}/partnerships/plan/${planId}/master_policy`,
        headers: {
            'Cookie': 'trackerid=UhVeH5uYtzYv7V__Cngflg; _fbp=fb.1.1663559988256.583968084; host=; iframe_exit_url=/partnerships/close_iframe; _x_w=25_2; we_aid=5dc9f1473b94879ee3880e56e2d6d924d0afa9ef; _hjSessionUser_3296766=eyJpZCI6IjkyZjlhMDUzLWE5MGItNWUxYy1iMTBhLWQ5MmY3Y2JhNDY4NCIsImNyZWF0ZWQiOjE2NzI3Mjk1NTQ5NTYsImV4aXN0aW5nIjp0cnVlfQ==; csrftoken=EXZI4M1gQDLFOztBrzk6QRfgAinc7hNPjnlVwnh3EtyZAUfzTK6a3WypmlXP2YHr; wisepops=%7B%22csd%22%3A1%2C%22popups%22%3A%7B%7D%2C%22sub%22%3A0%2C%22ucrn%22%3A72%2C%22cid%22%3A%2267186%22%2C%22v%22%3A4%2C%22bandit%22%3A%7B%22recos%22%3A%7B%7D%7D%7D; wisepops_visits=%5B%222023-04-27T12%3A27%3A49.097Z%22%5D; wisepops_session=%7B%22arrivalOnSite%22%3A%222023-04-27T12%3A27%3A49.097Z%22%2C%22mtime%22%3A1682598470714%2C%22pageviews%22%3A1%2C%22popups%22%3A%7B%7D%2C%22bars%22%3A%7B%7D%2C%22sticky%22%3A%7B%7D%2C%22countdowns%22%3A%7B%7D%2C%22src%22%3Anull%2C%22utm%22%3A%7B%7D%2C%22testIp%22%3Anull%7D; _ga_GC25KZZHSF=GS1.1.1682598469.1.0.1682598530.60.0.0; _vwo_uuid=D85267BB09172C7A1D397BEED3BE48576; _vis_opt_test_cookie=1; _ga=GA1.1.1295132653.1663577999; ajs_user_id=oCY9zz1XP4S7kVN-mAbpJQ; _vwo_uuid_v2=DAE51CE59458F4F1BCD227BDCEA5F6510|6af6db5c7d73088ef8b8960a360582b2; _hjSessionUser_3514615=eyJpZCI6ImU5ZjVkN2E1LTUzOTgtNTMzZi1hOGJhLTFiNWNjM2FjMjQzYyIsImNyZWF0ZWQiOjE2ODYxMzczNTE2OTcsImV4aXN0aW5nIjp0cnVlfQ==; _clck=px4bto|2|fck|0|1253; _gcl_au=1.1.869187593.1689695067; internet_fnol_source=incident_details; user_data=%7B%22is_authenticated%22%3A%20true%2C%20%22user%22%3A%20%7B%22id%22%3A%20%22oCY9zz1XP4S7kVN-mAbpJQ%22%2C%20%22mobile%22%3A%20%228002218218%22%7D%7D; sessionid=9kgjiy7ocnbexbzxsd3nwvg8ihanxpw8; analytics_session_id=1693381110429; analytics_session_id.last_access=1693381134032; user_id=oCY9zz1XP4S7kVN-mAbpJQ:1693381223:2d45f678a584275137eec3fd57574db401653be4; _uetsid=2087ac30463711ee965b314bd44deb59; _uetvid=81337dc037cf11ed9fb405461d06846d; _ga_W47KBK64MF=GS1.1.1693393078.113.1.1693393081.57.0.0; acko_visit=6CfYDSNb5E3-QJNNLKSO-g; acko_visit=cJ-LusB5r0ePOMCMM1LKBw; trackerid=L_cCpZVVjTOsh7L3cApBtw; user_id=USWlAmD5blMSF0LTOKUDVA:1691485515:f122478e37455d6e4f1b6ae72a14b7ba0bfa3c3e',
            'Content-Type': 'application/json'
        }
    };

    axios.request(config)
        .then(response => response.data.forEach(policy => putMasterPolicy(policy, planId)))
        .catch((error) => {
            console.error("Failed for ", planId, " : ", error.response);
        })
}

async function putMasterPolicy(policy, plan) {
    const endDate = calculateUpdatedDateAfterMonths(12)
    policy.end_date = endDate
    console.log("new end Date :", endDate)
    let data = JSON.stringify(policy);

    let configPut = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${envDomain}/partnerships/plan/${plan}/master_policy`,
        headers: {
            'Cookie': 'trackerid=UhVeH5uYtzYv7V__Cngflg; _fbp=fb.1.1663559988256.583968084; host=; iframe_exit_url=/partnerships/close_iframe; _x_w=25_2; we_aid=5dc9f1473b94879ee3880e56e2d6d924d0afa9ef; _hjSessionUser_3296766=eyJpZCI6IjkyZjlhMDUzLWE5MGItNWUxYy1iMTBhLWQ5MmY3Y2JhNDY4NCIsImNyZWF0ZWQiOjE2NzI3Mjk1NTQ5NTYsImV4aXN0aW5nIjp0cnVlfQ==; csrftoken=EXZI4M1gQDLFOztBrzk6QRfgAinc7hNPjnlVwnh3EtyZAUfzTK6a3WypmlXP2YHr; wisepops=%7B%22csd%22%3A1%2C%22popups%22%3A%7B%7D%2C%22sub%22%3A0%2C%22ucrn%22%3A72%2C%22cid%22%3A%2267186%22%2C%22v%22%3A4%2C%22bandit%22%3A%7B%22recos%22%3A%7B%7D%7D%7D; wisepops_visits=%5B%222023-04-27T12%3A27%3A49.097Z%22%5D; wisepops_session=%7B%22arrivalOnSite%22%3A%222023-04-27T12%3A27%3A49.097Z%22%2C%22mtime%22%3A1682598470714%2C%22pageviews%22%3A1%2C%22popups%22%3A%7B%7D%2C%22bars%22%3A%7B%7D%2C%22sticky%22%3A%7B%7D%2C%22countdowns%22%3A%7B%7D%2C%22src%22%3Anull%2C%22utm%22%3A%7B%7D%2C%22testIp%22%3Anull%7D; _ga_GC25KZZHSF=GS1.1.1682598469.1.0.1682598530.60.0.0; _vwo_uuid=D85267BB09172C7A1D397BEED3BE48576; _vis_opt_test_cookie=1; _ga=GA1.1.1295132653.1663577999; ajs_user_id=oCY9zz1XP4S7kVN-mAbpJQ; _vwo_uuid_v2=DAE51CE59458F4F1BCD227BDCEA5F6510|6af6db5c7d73088ef8b8960a360582b2; _hjSessionUser_3514615=eyJpZCI6ImU5ZjVkN2E1LTUzOTgtNTMzZi1hOGJhLTFiNWNjM2FjMjQzYyIsImNyZWF0ZWQiOjE2ODYxMzczNTE2OTcsImV4aXN0aW5nIjp0cnVlfQ==; _clck=px4bto|2|fck|0|1253; _gcl_au=1.1.869187593.1689695067; internet_fnol_source=incident_details; user_data=%7B%22is_authenticated%22%3A%20true%2C%20%22user%22%3A%20%7B%22id%22%3A%20%22oCY9zz1XP4S7kVN-mAbpJQ%22%2C%20%22mobile%22%3A%20%228002218218%22%7D%7D; sessionid=9kgjiy7ocnbexbzxsd3nwvg8ihanxpw8; analytics_session_id=1693381110429; analytics_session_id.last_access=1693381134032; user_id=oCY9zz1XP4S7kVN-mAbpJQ:1693381223:2d45f678a584275137eec3fd57574db401653be4; _uetsid=2087ac30463711ee965b314bd44deb59; _uetvid=81337dc037cf11ed9fb405461d06846d; _ga_W47KBK64MF=GS1.1.1693393078.113.1.1693393081.57.0.0; acko_visit=6CfYDSNb5E3-QJNNLKSO-g; acko_visit=cJ-LusB5r0ePOMCMM1LKBw; trackerid=L_cCpZVVjTOsh7L3cApBtw; user_id=USWlAmD5blMSF0LTOKUDVA:1691485515:f122478e37455d6e4f1b6ae72a14b7ba0bfa3c3e',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(configPut)
        .then((response) => {
            console.log(`Master policy updated for ${plan} : `, JSON.stringify(response.data));
        })
        .catch((error) => {
            console.error("put request failed for", plan, policy.number, error.response.data);
        });
}