<script>
  import { onMount } from "svelte";
  import Single from "./sign/Single.svelte"
  

  let randomNumber = 0;

  let countEndpoint =
    `https://signsearch.search.windows.net/indexes/sign-index/docs/$count?&api-version=2020-06-30-Preview&api-key=${import.meta.env.PUBLIC_SEARCH_QUERY_KEY}`;
  let randomEndpoint =
    `https://signsearch.search.windows.net/indexes/sign-index/docs?api-version=2020-06-30-Preview&api-key=${import.meta.env.PUBLIC_SEARCH_QUERY_KEY}&$top=1&$skip=`;

  let signPage;


  onMount(async function () {
    let signs = import.meta.glob("../pages/sign/*.md");
    const response = await fetch(countEndpoint);
    const data = await response.text();

    const totalCount = parseInt(data);

    randomNumber = Math.floor(Math.random() * totalCount);
    const randResp = await fetch(
      randomEndpoint + randomNumber.toString()
    );
    const res = await randResp.json();
    let imageid = res.value[0].ImageId;
    
    for (const key in signs) {
      if (key == "../pages/sign/" + imageid + ".md") {
      signPage = await signs[key]();
      }
    }
  });
</script>

{#if signPage}
<Single sign={signPage.frontmatter} />
{:else}
  <p>Loading</p>
{/if}
