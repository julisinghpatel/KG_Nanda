import React from 'react'
import HeroDiagnostic from '../../components/Facalities/Diagnostic/HeroDiagnostic'
import DiagnosticOverview from '../../components/Facalities/Diagnostic/DiagnosticOverview'
import DiagnosticSpecialties from '../../components/Facalities/Diagnostic/DiagnosticSpecialties'

const Diagnostic = () => {
    return (
        <div>
           <HeroDiagnostic/>
           <DiagnosticOverview/>
           <DiagnosticSpecialties/>
        </div>
    )
}

export default Diagnostic
