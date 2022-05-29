import React, {useState} from 'react'
import "./FilterList.css"

const FilterList = ({children, onApplyFilters, routeCreate}) => {
  const [showFilter, setShowFilter] = useState(false)
  const canISeeFilter = showFilter ? "visible" : "hidden"

  return (
    <>
      <div className="filter-list_container">
        <div className="filter-list_head">
          <button onClick={() => setShowFilter(!showFilter)}>Filtros</button>
          <a href={routeCreate}>Crear</a>
        </div>
        <form
          className={`filter-list_content-${canISeeFilter}`}
          onSubmit={(e) => onApplyFilters(e)}
        >
          {children}
          <div className="filter-list_footer">
            <button type="reset">Limpiar</button>
            <button type="submit">Aplicar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FilterList