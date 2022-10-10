<script>
export let sign;
</script>

{#if sign}
  <div class="columns has-same-height is-gapless is-centered">
    <div class="column is-two-thirds image-list">
      <div class="card">
        <div class="card-header">
          <div class="card-header-title">
            <h3 class="title has-text-centered has-text-weight-medium is-4">
              {sign.title}
            </h3>
          </div>
        </div>
        <div class="card-image">
          <figure class="image widthis-4by3">
            <a href={`/sign/${sign.imageid}`}>
              <img
                class="lazy-initial lazy-complete"
                data-src={`https://sign.sagebrushgis.com/${sign.imageid}/${sign.imageid}_l.jpg`}
                src={`https://sign.sagebrushgis.com/${sign.imageid}/${sign.imageid}_l.jpg`}
                alt={sign.title}
                style="opacity: 1; transition: opacity 0.15s linear 0s;"
              />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="is-size-6"><slot name="name"/></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {:else}
  <p>Loading</p>
  {/if}