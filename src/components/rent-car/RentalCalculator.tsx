import { useState, useEffect } from 'react'
import { DollarSign, Info } from 'react-feather'

export default function RentalCalculator() {
  const [days, setDays] = useState(3)
  const [dailyRate, setDailyRate] = useState(45)
  const [insurance, setInsurance] = useState(true)
  const [gps, setGps] = useState(false)
  const [childSeat, setChildSeat] = useState(false)
  const [additionalDriver, setAdditionalDriver] = useState(false)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let calculatedTotal = days * dailyRate
    
    if (insurance) calculatedTotal += days * 12 // €12/dia seguro
    if (gps) calculatedTotal += days * 8 // €8/dia GPS
    if (childSeat) calculatedTotal += days * 5 // €5/dia cadeira criança
    if (additionalDriver) calculatedTotal += 25 // €25 fixo

    setTotal(calculatedTotal)
  }, [days, dailyRate, insurance, gps, childSeat, additionalDriver])

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Calculadora de Preço</h3>
        <DollarSign className="w-5 h-5 text-green-600" />
      </div>

      <div className="space-y-4">
        {/* Duração */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Duração do Aluguel
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min="1"
              max="30"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="flex-1"
              title="Duração em dias"
              aria-label="Duração do aluguel em dias"
            />
            <span className="text-lg font-semibold text-green-600 min-w-[60px]">
              {days} {days === 1 ? 'dia' : 'dias'}
            </span>
          </div>
        </div>

        {/* Taxa Diária */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Taxa Diária Base
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min="25"
              max="200"
              step="5"
              value={dailyRate}
              onChange={(e) => setDailyRate(parseInt(e.target.value))}
              className="flex-1"
              title="Taxa diária"
              aria-label="Taxa diária base"
            />
            <span className="text-lg font-semibold text-green-600 min-w-[60px]">
              €{dailyRate}/dia
            </span>
          </div>
        </div>

        {/* Extras */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Extras</h4>
          <div className="space-y-3">
            {/* Seguro */}
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={insurance}
                  onChange={(e) => setInsurance(e.target.checked)}
                  className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">Seguro Completo</span>
              </div>
              <span className="text-sm text-gray-500">€12/dia</span>
            </label>

            {/* GPS */}
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={gps}
                  onChange={(e) => setGps(e.target.checked)}
                  className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">GPS</span>
              </div>
              <span className="text-sm text-gray-500">€8/dia</span>
            </label>

            {/* Cadeira de Criança */}
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={childSeat}
                  onChange={(e) => setChildSeat(e.target.checked)}
                  className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">Cadeira de Criança</span>
              </div>
              <span className="text-sm text-gray-500">€5/dia</span>
            </label>

            {/* Condutor Adicional */}
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={additionalDriver}
                  onChange={(e) => setAdditionalDriver(e.target.checked)}
                  className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">Condutor Adicional</span>
              </div>
              <span className="text-sm text-gray-500">€25</span>
            </label>
          </div>
        </div>

        {/* Resumo */}
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Aluguel ({days} dias)</span>
              <span>€{days * dailyRate}</span>
            </div>
            
            {insurance && (
              <div className="flex justify-between text-gray-600">
                <span>Seguro</span>
                <span>€{days * 12}</span>
              </div>
            )}
            
            {gps && (
              <div className="flex justify-between text-gray-600">
                <span>GPS</span>
                <span>€{days * 8}</span>
              </div>
            )}
            
            {childSeat && (
              <div className="flex justify-between text-gray-600">
                <span>Cadeira de Criança</span>
                <span>€{days * 5}</span>
              </div>
            )}
            
            {additionalDriver && (
              <div className="flex justify-between text-gray-600">
                <span>Condutor Adicional</span>
                <span>€25</span>
              </div>
            )}
            
            <hr className="border-green-200" />
            
            <div className="flex justify-between font-bold text-lg text-green-800">
              <span>Total</span>
              <span>€{total}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
          <div className="flex items-start">
            <Info className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-blue-700">
              <p className="font-semibold mb-1">Incluído no preço:</p>
              <ul className="space-y-1">
                <li>• Quilometragem ilimitada</li>
                <li>• Seguro básico obrigatório</li>
                <li>• Assistência 24h</li>
                <li>• IVA incluído</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botão de Reserva */}
        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
          Reservar Agora
        </button>
      </div>
    </div>
  )
}
